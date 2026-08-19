import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./db", () => ({
  getLessonProgressForUser: vi.fn(),
  getMostRecentlyOpenedLesson: vi.fn(),
  markLessonOpened: vi.fn(),
  setLessonCompletion: vi.fn(),
}));

import * as db from "./db";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const learner = {
  id: 24680,
  openId: "progress-test-user",
  email: "progress@example.com",
  name: "Progress Learner",
  loginMethod: "manus",
  role: "user" as const,
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

function createContext(): TrpcContext {
  return {
    user: learner,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => undefined } as TrpcContext["res"],
  };
}

describe("learner progress success paths", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calculates completed, next, and resume lessons from stored learner state", async () => {
    vi.mocked(db.getLessonProgressForUser).mockResolvedValue([
      { lessonId: "career-diagnostic", completedAt: new Date(), lastOpenedAt: new Date(), id: 1, userId: learner.id, createdAt: new Date(), updatedAt: new Date() },
      { lessonId: "sourcing-and-screening", completedAt: null, lastOpenedAt: new Date(), id: 2, userId: learner.id, createdAt: new Date(), updatedAt: new Date() },
    ]);
    vi.mocked(db.getMostRecentlyOpenedLesson).mockResolvedValue({
      lessonId: "sourcing-and-screening",
      completedAt: null,
      lastOpenedAt: new Date(),
      id: 2,
      userId: learner.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const result = await appRouter.createCaller(createContext()).learning.dashboard();

    expect(result.completedLessonIds).toEqual(["career-diagnostic"]);
    expect(result.completedCount).toBe(1);
    expect(result.totalLessons).toBeGreaterThan(16);
    expect(result.nextLessonId).toBe("modern-hr-function");
    expect(result.resumeLessonId).toBe("sourcing-and-screening");
  });

  it("persists a valid opened lesson and completion update for the authenticated learner", async () => {
    const caller = appRouter.createCaller(createContext());
    vi.mocked(db.markLessonOpened).mockResolvedValue(undefined);
    vi.mocked(db.setLessonCompletion).mockResolvedValue(undefined);

    await expect(caller.learning.markOpened({ lessonId: "career-diagnostic" })).resolves.toEqual({ success: true });
    await expect(caller.learning.setCompletion({ lessonId: "career-diagnostic", completed: true })).resolves.toEqual({ success: true });

    expect(db.markLessonOpened).toHaveBeenCalledWith(learner.id, "career-diagnostic");
    expect(db.setLessonCompletion).toHaveBeenCalledWith(learner.id, "career-diagnostic", true);
  });
});
