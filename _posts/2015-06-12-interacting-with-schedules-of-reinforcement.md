---
title: Interacting with schedules of reinforcement
excerpt: a prototype for teaching schedules of reinforcement
tags: ['science', 'software', 'programming']
language: en
pt: /2015/06/12/interagindo-com-esquemas-de-reforcamento.html
copyright: <!--Copyright (c) 2015-2016 Carlos Rafael Fernandes Picanço-->
image: rat-press-bar-skinner-box.jpg
---

Some time ago I wrote a simple software called *Schedules of Reinforcement* for testing the implementation of some schedules. This software draws a cumulative record of the user's responses in real time. The *operandum* is a panel that receives clicks. Some people suggested to me this software could be used to teach schedules of reinforcement in an interactive fashion. Then, I am releasing it to you as a prototype. You can download the program with the following links:

- [Windows](https://github.com/cpicanco/stimulus_control/releases/download/v0.0.2.2/schedules_test_win.exe)
- [Debian](https://github.com/cpicanco/stimulus_control/releases/download/v0.0.2.2/schedules_test_deb)
- [Source (GPL 3)](https://github.com/cpicanco/stimulus_control/tree/master/tests/schedules)

No installation is required. Fell free to leave suggestions in the commentaries!

Until now, the following schedules were implemented:

- **`EXT`**, extinction
    - no consequences programmed.

- **`FT x`**, fixed time
    - present a consequence at the end of a time interval `x`, independent of responses.

- **`VT t d`**, variable time
    - present a consequence at the end of a time interval `x`, independent of responses, where:
      `x = t +- d`
    - `t` is the expected mean interval.
    - `d` is deviation from the mean.

- **`CRF`**, continuous reinforcement
    - present a consequence for each response.

- **`FR x`**, fixed ratio
    - present a consequence for each `x` responses.

- **`VR r d`**, variable ratio
    - present a consequence for each `x` responses, where:
      `x = r +- d`.
    - `r` is the expected mean response.
    - `d` is deviation from the mean.

- **`FI t`**, fixed interval
    - present a consequence to the first response after a time interval `t`.

- **`VI t d`**, variable interval
    - present a consequence to the first response after a time interval `x`, where:
      `x = t +- d`
    - `t` is the expected mean interval.
    - `d` is deviation from the mean.

- **`DRH x t`**, differential reinforcement of high rates
    - present a consequence after occurrence of `x` responses iff emitted before a time interval `t` has ended. This is, there is a reset of a response counter at the end of the `t` interval when the number of responses is lower than `x` and the reset and a consequence when the number of responses is equal to or greater than `x`.

- **`DRL t`**, differential reinforcement of low rates
    - present a consequence to a response iff the response has been preceded by a time interval `t` without emission of the response.

That is it! Make good use!

P.S.: I want to thank and give credits to Dráusio Capobianco (developer of a significant part of the code), without him this software would not have been done. Thank you!