import { test } from "node:test";
import assert from "node:assert/strict";
import {
  getPage,
  getYouTubeVideoId,
  buildContactMailto,
} from "../src/app/lib/utils.ts";
import {
  projects,
  certifications,
  awards,
  activities,
  events,
  profile,
} from "../src/app/data/portfolio.ts";

test("all four static-host-safe pages resolve, including direct links and trailing slashes", () => {
  for (const value of ["", "#", "#/"]) assert.equal(getPage(value), "home");
  assert.equal(getPage("#/resume"), "resume");
  assert.equal(getPage("#/portfolio/"), "projects");
  assert.equal(getPage("#/projects"), "projects");
  assert.equal(getPage("#/contact"), "contact");
  assert.equal(getPage("#/missing"), "not-found");
});

test("YouTube share, watch, mobile, embed, shorts, and direct IDs are supported", () => {
  const id = "M7lc1UVf-VE";
  for (const value of [
    id,
    `https://youtu.be/${id}?si=test`,
    `https://www.youtube.com/watch?v=${id}&t=12`,
    `https://m.youtube.com/watch?v=${id}`,
    `https://www.youtube-nocookie.com/embed/${id}`,
    `https://youtube.com/shorts/${id}`,
    `https://www.youtube.com/live/${id}`,
  ])
    assert.equal(getYouTubeVideoId(value), id);
});

test("empty, malformed, unrelated, and misleading video URLs are rejected", () => {
  for (const value of [
    "",
    "   ",
    "not-a-valid-video-id",
    "javascript:alert(1)",
    "https://youtube.com.attacker.example/watch?v=M7lc1UVf-VE",
    "https://example.com/M7lc1UVf-VE",
    "https://youtube.com/watch?v=short",
    "https://youtu.be/M7lc1UVf-VEextra",
  ])
    assert.equal(getYouTubeVideoId(value), null);
});

test("email draft preserves message content and safely encodes reserved characters", () => {
  const uri = buildContactMailto("owner@example.com", {
    name: "  A & B\nTeam  ",
    email: " reply@example.com ",
    message: " Hello? Budget = 50% & café.\nThanks! ",
  });
  assert.ok(uri.startsWith("mailto:owner@example.com?"));
  const query = new URLSearchParams(uri.split("?")[1]);
  assert.equal(query.get("subject"), "Portfolio enquiry from A & B Team");
  assert.equal(
    query.get("body"),
    "Name: A & B Team\nEmail: reply@example.com\n\nHello? Budget = 50% & café.\nThanks!",
  );
});

test("all eight supplied projects have unique IDs and useful content", () => {
  assert.equal(projects.length, 8);
  assert.equal(new Set(projects.map((project) => project.id)).size, 8);
  assert.deepEqual(
    ["Software", "AI/ML", "Graphics"].map(
      (category) =>
        projects.filter((project) => project.category === category).length,
    ),
    [3, 4, 1],
  );
  for (const project of projects) {
    assert.equal(project.details.length, 2);
    assert.ok(project.tech.length >= 3);
    if (project.github)
      assert.equal(new URL(project.github).hostname, "github.com");
  }
});

test("the supplied CV is the only source of portfolio entries", () => {
  assert.equal(profile.name, "Abdur Rahman");
  assert.equal(certifications.length, 3);
  assert.equal(awards.length, 4);
  assert.equal(events.length, 4);
  assert.equal(activities.length, 7);
  assert.ok(
    !JSON.stringify(projects).match(/DocuGuard|JobFinder|Tanaya|Butter Bot/),
  );
});

test("test accuracy and training accuracy keep their distinct meanings", () => {
  assert.match(
    projects
      .find((project) => project.id === "fashion-mnist")!
      .details.join(" "),
    /90\.65% test accuracy/,
  );
  assert.match(
    projects.find((project) => project.id === "lstm")!.details.join(" "),
    /96\.94% training accuracy/,
  );
});
