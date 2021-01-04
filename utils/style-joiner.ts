
export default function styleJoiner(...classes: Array<String>) : string {
  return classes.join(" ").trim();
}