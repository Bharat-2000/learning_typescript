type GreetProps = {
    name: string,
    age: number,
}
export const Greet = (props : GreetProps) => {
    return (
        <div>hello my name is {props.name} and my age is {props.age}</div>
    )
}