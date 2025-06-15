# Development Cycle

## 1. VRLY's Development and Delivery Model

VRLY is a solo-founded, ultra-lean IT services provider focused on managed AI and workflow automation for psychotherapists in Hannover. The company operates under severe resource constraints, with a strong emphasis on efficiency, rapid iteration, and compliance. Florentin, as the sole developer and founder, is responsible for the entire development, delivery, and operational lifecycle, employing a modern TypeScript monorepo, Cloudflare Workers, and automated DevOps practices. Project management is handled with a structured, status-driven workflow (Backlog → Ready → In Progress → In Review → Testing → Staging → Ready for Deployment → In Production), using t-shirt sizing for effort estimation and automation for status transitions.

## 2. Cycle Structure and Rationale

### 2.1. Cycle Duration: 2 Weeks

A two-week development cycle (sprint) is widely recognized as the "Goldilocks" duration for solo developers and small teams. It provides enough time to accomplish meaningful, end-to-end increments of work without the loss of focus or drift that can occur in longer cycles. For solo developers, this cadence supports:

- Deep engagement with tasks without excessive context switching
- Regular opportunities for review, course correction, and delivery of visible value
- A sustainable pace that prevents burnout and supports high-quality output.

### 2.2. Cooldown Period: 1 Week

Following each 2-week development cycle, a 1-week cooldown ("firebreak" or "buffer" sprint) is scheduled. This week is not for feature delivery but is reserved for:

- Technical debt reduction
- Refactoring and codebase hygiene
- Automated testing improvements
- Documentation updates
- Planning, research, and critical review

Cooldown periods have been shown to improve long-term velocity, prevent feature fatigue, and foster innovation by giving developers time to address non-feature work that is often neglected under constant delivery pressure. For solo developers, this is also crucial for mental health, strategic thinking, and avoiding tunnel vision.

### 2.3. Cycle Start Day: Monday

Cycles begin on Monday at 00:01, aligning with standard business weeks and facilitating clear weekly planning and review rituals.

### 2.4. Number of Upcoming Cycles: 6

Six upcoming cycles should be configured in the project management tool. This provides approximately three months of visible, assignable development windows, supporting both current work and near-term roadmap planning.

## 3. Implementation in Practice

### 3.1. Issue Planning and Estimation

- **Work Intake**: All tasks, features, bugs, and improvements are captured in the Backlog.
- **Prioritization**: Before each cycle, tasks are reviewed and prioritized. Only tasks with clear definitions and t-shirt size estimates (XS–XL) are moved to "Ready."
- **Capacity Planning**: Florentin estimates cycle capacity based on previous cycles, using the t-shirt sizing method. Realistically, a solo developer should not overcommit; 60–80% of the theoretical maximum should be targeted to allow for interruptions and emergent work.
- **Cycle Assignment**: Issues are assigned to the upcoming cycle based on priority and capacity. Unfinished work from the previous cycle rolls over automatically.

### 3.2. Development Workflow

- **Statuses**: Issues progress through the statuses defined in the DevOps page: Backlog → Ready → In Progress → In Review → Testing → Staging → Ready for Deployment → In Production.
- **Automations**: Status transitions are automated based on PR activity (e.g., opening a draft PR moves an issue to "In Progress"; merging a PR moves it to "In Production").
- **Cooldown Week**: No new feature work is assigned during cooldown. Instead, Florentin focuses on maintenance, technical debt, research, and process improvement.

### 3.3. Review and Retrospective

At the end of each cycle, a brief review is conducted:

- What was completed? What rolled over?
- Were estimates accurate?
- Any blockers or process improvements identified?
- Adjust backlog priorities and refine upcoming cycle scope.

The cooldown week provides space for deeper retrospectives and strategic adjustments.

## 4. Benefits and Best Practices

- **Sustainable Pace**: The 2+1 week structure (two weeks of focused delivery, one week of cooldown) prevents burnout and supports long-term productivity.
- **Technical Quality**: Cooldown periods ensure time for technical debt, documentation, and automation, which are critical for solo developers who cannot rely on others to catch issues.
- **Predictability**: Regular cycle starts on Monday and visible cycle planning (six cycles ahead) make project timelines predictable for both VRLY and its clients.
- **Continuous Improvement**: Frequent retrospectives and the explicit pause for review foster a culture of learning and adaptation, essential for a solo founder in a dynamic market.
- **Alignment with VRLY's Values**: The structure supports VRLY's focus on efficiency, transparency, and high-quality client outcomes, while enabling the founder to balance delivery with strategic growth activities.

## 5. Practical Example: Upcoming Cycle Schedule

Assuming today is Sunday, June 15, 2025, the next six cycles would be scheduled as follows:

| Cycle | Start Date  | End Date    | Cooldown Start | Cooldown End |
| ----- | ----------- | ----------- | -------------- | ------------ |
| 1     | Mon, 16 Jun | Sun, 29 Jun | Mon, 30 Jun    | Sun, 6 Jul   |
| 2     | Mon, 7 Jul  | Sun, 20 Jul | Mon, 21 Jul    | Sun, 27 Jul  |
| 3     | Mon, 28 Jul | Sun, 10 Aug | Mon, 11 Aug    | Sun, 17 Aug  |
| 4     | Mon, 18 Aug | Sun, 31 Aug | Mon, 1 Sep     | Sun, 7 Sep   |
| 5     | Mon, 8 Sep  | Sun, 21 Sep | Mon, 22 Sep    | Sun, 28 Sep  |
| 6     | Mon, 29 Sep | Sun, 12 Oct | Mon, 13 Oct    | Sun, 19 Oct  |

All development work is planned, tracked, and reviewed within this cadence.

## 6. Integration with DevOps Practices

This cycle structure directly complements the VRLY DevOps page by:

- Using the same status and estimation taxonomy
- Enabling automation-friendly planning and status transitions
- Providing regular, predictable windows for both delivery and operational excellence
- Supporting the solo developer's need for clear boundaries between focused work and maintenance
