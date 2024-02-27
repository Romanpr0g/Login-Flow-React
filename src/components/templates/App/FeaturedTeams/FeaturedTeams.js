import React, { useEffect, useState } from "react";
import { Spin } from 'antd';
import Empty from "../Empty/Empty";
import "./style.css";

const FeaturedTeams = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/teams", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setData(data);
        } else {
          console.error("Некорректные данные с сервера:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка запроса", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="featured-teams__content">
      {console.log(typeof data)}
      {loading ? (
        <Spin size="large" delay={100}/>
      ) : data?.user && Object.keys(data.user).length > 0 ? (
        <ul>
          {data.user.map((user) => (
            <li key={user.id}>
              <p>ID:</p> {user.id}
              <p>Имя:</p> {user.name}
              <p>Фамилия:</p> {user.surname}
            </li>
          ))}
        </ul>
      ) : (
        <Empty name="teams" />
      )}
    </div>
  );
};

export default FeaturedTeams;
