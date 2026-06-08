import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.github.com/users/lucifer-3739", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }

  const data = await res.json();

  return NextResponse.json({
    followers: data.followers,
    publicRepos: data.public_repos,
  });
}
