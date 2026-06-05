export function buildProgression(
    startVolume: number,
    weeks: number,
    increasePercent = 0.1,
    recoveryFrequency = 4,
    recoveryMultiplier = 0.75
  ): number[] {
    const result: number[] = [];
  
    let current = startVolume;
  
    for (let week = 1; week <= weeks; week++) {
      if (week > 1) {
        if (week % recoveryFrequency === 0) {
          current *= recoveryMultiplier;
        } else {
          current *= 1 + increasePercent;
        }
      }
  
      result.push(
        Math.round(current * 10) / 10
      );
    }
  
    return result;
  }