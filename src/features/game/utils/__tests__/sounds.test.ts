import { beforeAll, describe, expect, it, vi } from "vitest";

import {
  playClearSound,
  playClickSound,
  playFailSound,
  playMatchSound,
} from "../sounds";

// 模擬 HTMLMediaElement.prototype.play 方法
beforeAll(() => {
  vi.spyOn(HTMLMediaElement.prototype, "play").mockImplementation(() => {
    return Promise.resolve();
  });
});

describe("sounds", () => {
  it("should play clear sound when the sound is called", () => {
    playClearSound();
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("should play click sound when the sound is called", () => {
    playClickSound();
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("should play fail sound when the sound is called", () => {
    playFailSound();
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("should play match sound when the sound is called", () => {
    playMatchSound();
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
});
