# Trigger ME

## Setup Open PRs workflow trigger
```yml
name: Dispatch Merge Event

on:
  pull_request:
    branches:
      - main
    types: [closed]

jobs:
  publish-merge-event:
    if: ${{ github.event.pull_request.merged }}
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Open PRs workflow
        uses: GeekEast/trigger-open-pr-workflow@1.0.1
        with:
          token: ${{ secrets.ACCESS_TOKEN }}
          workflow_filename: 'pipeline.yml'
```
## the workflow file to trigger of `workflow_dispatch` event
```yml
name: Post Workflow Event

on: [workflow_dispatch]

jobs:
  echo:
    runs-on: ubuntu-latest
    steps:
      - name: Logger
        run: |
          sleep 10
          echo "hello world"

```

