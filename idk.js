"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    await navigator.clipboard.writeText("rozay110");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          min-height: 100%;
          background: #050505;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .background {
          position: fixed;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(155, 0, 255, 0.2),
              transparent 35%
            ),
            radial-gradient(
              circle at 100% 100%,
              rgba(255, 0, 180, 0.08),
              transparent 30%
            ),
            #050505;
        }

        .background::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .page {
          min-height: 100vh;
          padding: 70px 20px;
          display: flex;
          justify-content: center;
        }

        .container {
          width: 100%;
          max-width: 850px;
        }

        .profile {
          text-align: center;
          margin-bottom: 45px;
        }

        .avatar {
          width: 125px;
          height: 125px;
          margin: auto;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(
            135deg,
            #ffffff,
            #a000ff,
            #ff00c8
          );
          box-shadow: 0 0 45px rgba(160, 0, 255, 0.25);
        }

        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
          font-weight: 900;
        }

        .name {
          margin: 20px 0 5px;
          font-size: 42px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .handle {
          color: #999;
          font-size: 16px;
        }

        .bio {
          max-width: 570px;
          margin: 18px auto 0;
          color: #c8c8c8;
          line-height: 1.7;
          font-size: 16px;
        }

        .section {
          margin-top: 25px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          background: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(15px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
        }

        .section-title {
          margin: 0 0 18px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #888;
        }

        .links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .link {
          padding: 17px;
          border-radius: 13px;
          background: #111;
          border: 1px solid #242424;
          font-weight: 700;
          transition: 0.2s ease;
          cursor: pointer;
        }

        .link:hover {
          transform: translateY(-3px);
          border-color: #a000ff;
          background: #171717;
          box-shadow: 0 10px 30px rgba(160, 0, 255, 0.12);
        }

        .discord {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 18px;
          border-radius: 15px;
          background: #111;
          border: 1px solid #242424;
        }

        .discord-left {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .discord-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #5865f2;
          font-weight: 900;
        }

        .discord-name {
          font-weight: 800;
        }

        .online {
          margin-top: 4px;
          color: #777;
          font-size: 13px;
        }

        .copy {
          border: 0;
          padding: 10px 15px;
          border-radius: 9px;
          background: #222;
          color: white;
          cursor: pointer;
          font-weight: 700;
        }

        .copy:hover {
          background: #333;
        }

        .projects {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .project {
          padding: 20px;
          border-radius: 14px;
          background: #111;
          border: 1px solid #242424;
        }

        .project h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .project p {
          margin: 0;
          color: #888;
          font-size: 14px;
          line-height: 1.5;
        }

        .footer {
          text-align: center;
          margin-top: 35px;
          color: #555;
          font-size: 13px;
        }

        @media (max-width: 650px) {
          .page {
            padding: 45px 15px;
          }

          .name {
            font-size: 34px;
          }

          .links,
          .projects {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 18px;
          }

          .discord {
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="background" />

      <main className="page">
        <div className="container">

          <section className="profile">
            <div className="avatar">
              <div className="avatar-inner">R</div>
            </div>

            <h1 className="name">Rozay110</h1>

            <div className="handle">@rozay110</div>

            <p className="bio">
              Developer, creator & gamer.
              <br />
              Welcome to my little corner of the internet.
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">Links</h2>

            <div className="links">
              <a
                className="link"
                href="https://github.com/"
                target="_blank"
              >
                GitHub ↗
              </a>

              <a
                className="link"
                href="https://discord.com/"
                target="_blank"
              >
                Discord ↗
              </a>

              <a
                className="link"
                href="https://www.youtube.com/"
                target="_blank"
              >
                YouTube ↗
              </a>

              <a
                className="link"
                href="https://www.tiktok.com/"
                target="_blank"
              >
                TikTok ↗
              </a>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Discord</h2>

            <div className="discord">
              <div className="discord-left">
                <div className="discord-icon">D</div>

                <div>
                  <div className="discord-name">rozay110</div>
                  <div className="online">Available</div>
                </div>
              </div>

              <button className="copy" onClick={copyDiscord}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Projects</h2>

            <div className="projects">
              <div className="project">
                <h3>My Projects</h3>
                <p>
                  Games, websites, tools and other projects
                  I'm working on.
                </p>
              </div>

              <div className="project">
                <h3>Coming Soon</h3>
                <p>
                  More projects and updates will be added here.
                </p>
              </div>
            </div>
          </section>

          <div className="footer">
            © 2026 Rozay110 · rozay110.fun
          </div>

        </div>
      </main>
    </>
  );
}
