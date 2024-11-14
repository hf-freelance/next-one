/* eslint-disable @next/next/no-async-client-component */
'use client';

export default function CatForm() {
    let message = '';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmitCategory = (e: { preventDefault: () => void; target: any }) => {
    // Empêche le navigateur de recharger la page
        e.preventDefault();

        message = 'Wait';

        // Lit les données du formulaire
        const form = e.target;
        const formData = new FormData(form);
        fetch('http://localhost:3000/api/category', {
            method: 'POST',
            body: JSON.stringify({"label": formData.get("label")})
        }).then(() => message = 'New category added')
        .catch(() => message = 'Error addind category');
    }

    return (
        <form method="post" onSubmit={handleSubmitCategory}>
            <label>
                New category :
                <input type="text" name="label"></input>
            </label>
            <button type="submit">Add category</button>
            <p>msg : {message}</p>
        </form>
    );
}