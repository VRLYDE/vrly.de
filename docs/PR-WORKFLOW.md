# Pull Request Workflow

1. **On draft PR open, move to:** In Progress - When a draft PR is opened, it indicates active development work is happening, so the issue should be moved to "In Progress" status to reflect this.
2. **On PR open, move to:** In Review - When a pull request is opened or a commit is pushed, it signals that the code is ready for review, so the issue should automatically transition to "In Review" status.
3. **On PR review request or activity, move to:** Testing - When a pull request has been reviewed and approved, it's ready for testing in a dedicated environment. This automation helps ensure proper progression through the testing phase.
4. **On PR ready for merge, move to:** Ready for Deployment - Once all testing is complete and the changes are verified in staging, the PR is marked as ready for merge, indicating it's prepared for deployment to production.
5. **On PR merge, move to:** In Production - After the pull request is merged, the changes are considered live in production, so the issue status should automatically update to "In Production" to reflect the completed deployment.
