export const ParseHeader = (str, itemIndex) => {
    const [h1, strong, ...other] = str.split(' ');
    return (
        <>
            {h1} <strong>{strong} </strong> {other}
        </>
    );
};
