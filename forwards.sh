git checkout .
git clean -fd
git checkout $(git log --reverse --pretty=%H --ancestry-path HEAD..eksempel-1-refaktorering | head -n 1)