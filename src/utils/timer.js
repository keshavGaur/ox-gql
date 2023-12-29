const NS_PER_SEC = 1e9;
module.exports = {
  getNanoTime: () => {
    const currentTime = process.hrtime();
    return currentTime[0] * NS_PER_SEC + currentTime[1];
  },
  diffNanoTime: (time2, time1) => {
    const time1Secs = time1[0];
    const time1NanoSecs = time1[1];
    const time2Secs = time2[0];
    const time2NanoSecs = time2[1];
    let ns = time1NanoSecs - time2NanoSecs; // nanosecs delta, can overflow (will be negative)
    let s = time1Secs - time2Secs; // secs delta
    if (ns < 0) { // has overflowed
      s -= 1; // cut a second
      ns += NS_PER_SEC; // add a billion nanosec (to neg number)
    }
    return s * NS_PER_SEC + ns;
  },
};
