'use client';

export default function CatForm(props: { handleNewCategory: (data: string) => void }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmitCategory = (e: { preventDefault: () => void; target: any }) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const data = JSON.stringify({
            "label": formData.get("label"),
        });

        props.handleNewCategory(data);
    }

    return (
        <form method="post" onSubmit={handleSubmitCategory}>
            <label>
                New category :
                <br />
                <input type="text" name="label" required></input>
            </label>
            <br />
            <button type="submit" className="bg-green-700 text-white">Add category</button>
        </form>
    );
}