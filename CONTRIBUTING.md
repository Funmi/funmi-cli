# fadmin-cli contributing guide

## Issue Reporting Guidelines

- First identify where error is coming from. If it's occuring while running `fadmin` command then issue is indeed on
`fadmin-cli` so please report it here. If error appears when you run one of `npm run` scripts, problem originates
from a template you're using, [maybe one of the official ones](https://github.com/fadminjs-templates). If so, please
open an issue on a template repository.

- Try to search for your issue, it may have already been answered or even fixed in the development branch.

## Development Setup

``` bash
npm install
bin/fadmin init <path-to-github-repo OR path-to-local-dir>
bin/fadmin list
```
