import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import express from "../assets/express.png";
import redis from "../assets/redis.png";
import s3 from "../assets/s3.png";
import next from "../assets/nextjs.png";
import digitalocean from "../assets/do.png";
import docker from "../assets/docker.png";
import electron from "../assets/electron.png";
import jenkins from "../assets/jenkins.png";
import jwt from "../assets/jwt.png";
import kubernetes from "../assets/kubernetes.png";
import pg from "../assets/pg.png";
import ts from "../assets/ts.png";
import putty from "../assets/putty.png";

const Experience = () => {
  const techs = [
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 17,
      src: ts,
      title: "TypeScript",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-white",
    },
    {
      id: 5,
      src: express,
      title: "express JS",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-pink-400",
    },
    {
      id: 14,
      src: pg,
      title: "PostgreSQL",
      style: "shadow-green-600",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 11,
      src: next,
      title: "Next",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: redis,
      title: "Redis",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: s3,
      title: "AWS-S3",
      style: "shadow-purple-400",
    },
    {
      id: 15,
      src: electron,
      title: "Electron.js",
      style: "shadow-green-600",
    },
    {
      id: 18,
      src: jwt,
      title: "JWT",
      style: "shadow-orange-400",
    },
    {
      id: 9,
      src: jenkins,
      title: "Jenkins",
      style: "shadow-gray-400",
    },
    {
      id: 20,
      src: kubernetes,
      title: "Kubernetes",
      style: "shadow-purple-400",
    },
    {
      id: 20,
      src: putty,
      title: "Putty",
      style: "shadow-blue-400",
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Expertise
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
