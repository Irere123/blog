import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://irere.vercel.app/og.png)",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "gray",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
