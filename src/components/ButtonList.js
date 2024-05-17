import Button from "./Button";
const ButtonList = () => {
    const List = ["All", "Music", "Cooking", "Coding", "Marketing", "Art", "Comedy", "Movies", "Restaurants", "Colleges", "Food", "Shopping",]
    return (
        <div className="flex">
                {List.map((name, index) => { return <Button key={index} name={name}></Button> })}
        </div>
    );
}
export default ButtonList;

