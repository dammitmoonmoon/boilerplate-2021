module.exports = {
  rules: {
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],

    "header-max-length": [2, "always", 72],
    "subject-full-stop": [2, "never", "."],

    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],

    "scope-case": [2, "always", "lower-case"],
    "type-case": [2, "always", "lower-case"],

    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "test"
      ]
    ]
  }
};
