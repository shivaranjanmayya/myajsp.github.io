const myFunc = props => {
    const { x, y } = props;
    console.log(x);
    console.log(y);
}

const obj = { x: 123, y: 'Yo Yo' };

myFunc(obj);