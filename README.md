# Code Test - Fullstack Engineer

Hello and welcome to your code test.  

We hope that you both enjoy this and do well.  



## Guidelines

**Communicate.**  If you have any questions please feel free to ask them.  

**Time.**  We feel that you should be able to do this exercise in 2 hours.  You will have 48 hours from the time you start.  Please use your time to demonstrate not just your competance but use this to demonstrate your ability.  

**Solution.**  Feel free to use various libraries and tools to bootstrap the project or boilerplate structure.  We are looking for you to demonstrate your technical ability and aptitude.  *Feel free to impress us.*  

**Git.**  Please submit your code as git repository so that we can see both your thought process and your utilization of tools.  Start a git repository and send us your git repository so that we can review the commit log.  



## Problem

**Build a scheduler.**  The scheduler will include 2 views.  A dashboard calendar, and an event creation page.  

**Dashboard.**  This view will include two panels: 

1. A table of calendar events including: event_name, event_gps_location, event_start, event_end
2. A graphical view of the events.  Be inventive.  

**Event.**  This view will include a simple way to post events.  Add a validation error for the following:

* A validation error, such as start time occurring before a end time
* A conflict with an existing event.  

For example, 

| Name                  | Start            | End              | GPS                    | Result                     |
| --------------------- | ---------------- | ---------------- | ---------------------- | -------------------------- |
| Meeting with Sam      | 2019-10-26 8:00  | 2013-10-26 9:00  | 40.7128° N, 73.0060° W | Error: Invalid start-end   |
| Meeting with Jennifer | 2018-11-26 8:00  | 2018-11-26 13:00 | 40.651° N, 73.4567° W  | Success                    |
| Meeting with Jose     | 2018-11-26 10:00 | 2018-11-26 15:00 | 41.642° N, 73.4516° W  | Error: Conflicting time(s) |

**Utility.**  A quick tool (possibly a CLI tool), to insert a large number of events and generate error statuses for events that were not correctly inserted.  



## Submission

Please read through the guidelines above.  When you are done please send us your `git` repository privately.  