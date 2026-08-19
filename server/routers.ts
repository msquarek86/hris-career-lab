import { COOKIE_NAME } from "@shared/const";
import { courseLessonIds } from "../shared/course";
import * as db from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  learning: router({
    dashboard: protectedProcedure.query(async ({ ctx }) => {
      const [progress, mostRecentlyOpened] = await Promise.all([
        db.getLessonProgressForUser(ctx.user.id),
        db.getMostRecentlyOpenedLesson(ctx.user.id),
      ]);
      const completedLessonIds = progress.filter((item) => item.completedAt).map((item) => item.lessonId);
      const completedSet = new Set(completedLessonIds);
      const nextLessonId = courseLessonIds.find((lessonId) => !completedSet.has(lessonId)) ?? courseLessonIds[0];
      const resumeLessonId = mostRecentlyOpened?.lessonId && courseLessonIds.includes(mostRecentlyOpened.lessonId)
        ? mostRecentlyOpened.lessonId
        : nextLessonId;

      return {
        completedLessonIds,
        completedCount: completedLessonIds.length,
        totalLessons: courseLessonIds.length,
        nextLessonId,
        resumeLessonId,
      };
    }),
    markOpened: protectedProcedure
      .input(z.object({ lessonId: z.string().min(1).max(128) }))
      .mutation(async ({ ctx, input }) => {
        if (!courseLessonIds.includes(input.lessonId)) throw new Error("Unknown lesson");
        await db.markLessonOpened(ctx.user.id, input.lessonId);
        return { success: true } as const;
      }),
    setCompletion: protectedProcedure
      .input(z.object({ lessonId: z.string().min(1).max(128), completed: z.boolean() }))
      .mutation(async ({ ctx, input }) => {
        if (!courseLessonIds.includes(input.lessonId)) throw new Error("Unknown lesson");
        await db.setLessonCompletion(ctx.user.id, input.lessonId, input.completed);
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
