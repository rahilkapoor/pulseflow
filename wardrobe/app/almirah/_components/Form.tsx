export default function Form() {
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" />
            <br />
            <button type="submit">Add to Almirah</button>
        </form>
    );
}