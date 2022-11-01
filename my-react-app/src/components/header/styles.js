import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  h2 {
    position: relative;
    font-size: 24px;
    -webkit-text-stroke: 0.3vw #333;
    text-transform: uppercase;
  }
  h2::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    color: #e1ba1c;
    -webkit-text-stroke: 0vw;
    border-right: 2px solid #e1ba1c;
    overflow: hidden;
    animation: animate 6s linear infinite;
  }
  .logo_container {
    margin-top: 19px;
    margin-left: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 270px;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  @keyframes animate {
    0% {
      width: 0;
    }
    70% {
      width: 100%;
    }
  }

  .Navbar {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Navbar > .nav-items > a {
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    margin: 10px;
    position: relative;
    opacity: 0.9;
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  .Navbar > .nav-items > a:hover {
    opacity: 1;
  }

  .Navbar > .nav-items > a::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -9px;
    width: 0;
    height: 2px;
    background: #e1ba1c;
    transition: all 0.45s;
  }

  .Navbar > .nav-items > a:hover::before {
    width: 100%;
  }

  .Navbar > .nav-toggle {
    display: none;
  }
  @media (min-width: 700px) and (max-width: 1200px) {
    width: 100%;
    .logo_container {
      display: none;
    }
    .Navbar {
      justify-content: space-evenly;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    margin: 0 auto;
    .Navbar {
      background: #3b4da7;
      padding: 0px 20px;
    }
    .Navbar > .nav-items {
      padding-top: 20px;
      position: absolute;
      top: 80px;
      display: flex;
      gap: 15px;
      flex-direction: column;
      background: #444;
      left: 0;
      width: 100%;
      height: calc(40vh - 80px);
      transform: translateX(-100%);
      transition: all 0.45s;
    }
    .Navbar > .nav-items > a {
      text-align: center;
    }
    .Navbar > .nav-items > a::before {
      background: transparent;
    }

    .Navbar > .nav-items.open {
      transform: translateX(0);
    }

    .Navbar > .nav-toggle {
      display: flex;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .nav-toggle > .bar {
      position: relative;
      width: 32px;
      height: 2px;
      background: #ffffff;
      transition: all 0.45s ease-in-out;
    }

    .nav-toggle > .bar::before,
    .nav-toggle > .bar::after {
      content: "";
      position: absolute;
      height: 2px;
      background: #ffffff;
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
    }

    .nav-toggle > .bar::before {
      width: 25px;
      transform: translateY(-8px);
      right: 0;
    }

    .nav-toggle > .bar::after {
      width: 32px;
      transform: translateY(8px);
    }

    .nav-toggle.open > .bar {
      transform: translateX(-40px);
      background: transparent;
    }

    .nav-toggle.open > .bar::before {
      width: 32px;
      transform: rotate(45deg) translate(26px, -26px);
    }

    .nav-toggle.open > .bar::after {
      transform: rotate(-45deg) translate(26px, 26px);
    }
    .logo_container {
      display: none;
    }
  }
`;
