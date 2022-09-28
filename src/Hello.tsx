const Hello = (props: { title?: string }): JSX.Element => {
  const { title = "Hello" } = props;
  return <h1>{title}</h1>;
};

export default Hello;
