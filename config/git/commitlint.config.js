//

module.exports = {
  rules: {
    "header-max-length": [2, "always", 72],

    "subject-empty": [2, "never"],
    "subject-case": [2, "always", "sentence-case"],
    "subject-full-stop": [2, "never", "."],

    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],

    "scope-case": [2, "always", "lower-case"],

    "type-empty": [2, "never"],
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
