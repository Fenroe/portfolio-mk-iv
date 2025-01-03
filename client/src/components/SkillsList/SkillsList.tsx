import classes from "./SkillsList.module.scss";

export const SkillsList = () => {
  return (
    <div className={classes.skillsListContainer}>
      <ul className={classes.skillsList}>
        <li>Typescript</li>
        <li>React</li>
        <li>Docker</li>
        <li>Go</li>
        <li>PostgreSQL</li>
        <li>Python</li>
        <li>Tailwind</li>
        <li>Sass</li>
        <li>Linux</li>
        <li>Nextjs</li>
        <li>MongoDB</li>
        <li>REST</li>
        <li>Websockets</li>
      </ul>
    </div>
  );
};
