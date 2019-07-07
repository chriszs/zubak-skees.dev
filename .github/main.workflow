workflow "Publish" {
  on = "push"
  resolves = ["push"]
}

action "install" {
  uses = "docker://node:10.15-alpine"
  runs = "npm ci --production"
}

action "generate" {
  uses = "docker://node:10.15-alpine"
  needs = ["install"]
  runs = "npm run generate"
}

action "push" {
  uses = "docker://node:10.15-alpine"
  needs = ["generate"]
  runs = "npm run push"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}
