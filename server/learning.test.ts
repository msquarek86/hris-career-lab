import { describe, expect, it } from "vitest";
import { courseLessons, courseModules, findLesson, getModulePractice } from "../shared/course";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const learner = {
  id: 987654,
  openId: "course-test-user",
  email: "learner@example.com",
  name: "Learner",
  loginMethod: "manus",
  role: "user" as const,
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

function createContext(user: TrpcContext["user"]): TrpcContext {
  return {
    user,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => undefined } as TrpcContext["res"],
  };
}

describe("HRIS course catalog", () => {
  it("contains the source-derived learning levels and lessons", () => {
    expect(courseModules).toHaveLength(13);
    expect(courseLessons.length).toBeGreaterThanOrEqual(16);
    expect(findLesson("career-diagnostic")?.title).toContain("diagnostic");
    expect(findLesson("workday-concepts-and-terminology")?.sections[0]?.paragraphs.join(" ")).toContain("does not provide tenant access");
  });

  it("keeps practical work attached to every lesson", () => {
    expect(courseLessons.every((item) => item.practice.length > 40 && item.objectives.length >= 3)).toBe(true);
  });

  it("provides self-paced suggestions and interview challenges for every module", () => {
    expect(courseModules.every((module) => {
      const practice = getModulePractice(module.id);
      return Boolean(practice && practice.suggestions.length >= 2 && practice.interviewQuestions.length >= 2 && practice.challenge.prompt.length > 80);
    })).toBe(true);
  });
});

describe("learning procedures", () => {
  it("requires an authenticated learner to access dashboard state", async () => {
    const caller = appRouter.createCaller(createContext(null));
    await expect(caller.learning.dashboard()).rejects.toMatchObject({ code: "UNAUTHORIZED" });
  });

  it("rejects unknown lesson IDs before writing learner progress", async () => {
    const caller = appRouter.createCaller(createContext(learner));
    await expect(caller.learning.markOpened({ lessonId: "unknown-lesson" })).rejects.toThrow("Unknown lesson");
    await expect(caller.learning.setCompletion({ lessonId: "unknown-lesson", completed: true })).rejects.toThrow("Unknown lesson");
  });
});
