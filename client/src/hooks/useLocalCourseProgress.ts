import { courseLessonIds } from "@shared/course";
import { useCallback, useEffect, useMemo, useState } from "react";

type StoredCourseProgress = {
  completedLessonIds: string[];
  lastOpenedLessonId: string | null;
};

const STORAGE_KEY = "hris-career-lab-progress-v1";

function loadProgress(): StoredCourseProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedLessonIds: [], lastOpenedLessonId: null };
    const parsed = JSON.parse(raw) as Partial<StoredCourseProgress>;
    return {
      completedLessonIds: Array.isArray(parsed.completedLessonIds)
        ? parsed.completedLessonIds.filter((id): id is string => typeof id === "string" && courseLessonIds.includes(id))
        : [],
      lastOpenedLessonId: typeof parsed.lastOpenedLessonId === "string" && courseLessonIds.includes(parsed.lastOpenedLessonId)
        ? parsed.lastOpenedLessonId
        : null,
    };
  } catch {
    return { completedLessonIds: [], lastOpenedLessonId: null };
  }
}

export function useLocalCourseProgress() {
  const [progress, setProgress] = useState<StoredCourseProgress>(loadProgress);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Progress remains available for the current browser session when storage is unavailable.
    }
  }, [progress]);

  const completedSet = useMemo(() => new Set(progress.completedLessonIds), [progress.completedLessonIds]);
  const nextLessonId = useMemo(() => courseLessonIds.find((id) => !completedSet.has(id)) ?? courseLessonIds[0], [completedSet]);
  const resumeLessonId = progress.lastOpenedLessonId ?? nextLessonId;

  const markOpened = useCallback((lessonId: string) => {
    if (!courseLessonIds.includes(lessonId)) return;
    setProgress((current) => ({ ...current, lastOpenedLessonId: lessonId }));
  }, []);

  const setLessonCompletion = useCallback((lessonId: string, completed: boolean) => {
    if (!courseLessonIds.includes(lessonId)) return;
    setProgress((current) => ({
      ...current,
      completedLessonIds: completed
        ? Array.from(new Set([...current.completedLessonIds, lessonId]))
        : current.completedLessonIds.filter((id) => id !== lessonId),
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({ completedLessonIds: [], lastOpenedLessonId: null });
  }, []);

  return {
    completedSet,
    completedCount: progress.completedLessonIds.length,
    totalLessons: courseLessonIds.length,
    nextLessonId,
    resumeLessonId,
    markOpened,
    setLessonCompletion,
    resetProgress,
  };
}
