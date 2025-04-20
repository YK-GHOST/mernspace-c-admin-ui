import "@testing-library/jest-dom";
import { beforeEach, vi } from "vitest";

beforeEach(() => {
  // Mock matchMedia
  const matchMediaMock = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

  // Mock getComputedStyle with getPropertyValue function
  const getComputedStyleMock = vi.fn().mockImplementation(() => ({
    getPropertyValue: vi.fn().mockReturnValue(""), // This is crucial!
  }));

  vi.stubGlobal("matchMedia", matchMediaMock);
  vi.stubGlobal("getComputedStyle", getComputedStyleMock);
});
