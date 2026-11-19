/**
 * Resident system-section budget (characters), shared by every prompt-size test.
 * 3600 → 3700: e708848 lets four dsh search tools run before the fence, and the
 * section names the whole allow-list (PR #27). Raise it here, in one place.
 */
export const RESIDENT_PROMPT_BUDGET = 3700
