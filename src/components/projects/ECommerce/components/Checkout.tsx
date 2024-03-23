import { FormEvent, useState } from 'react';

export default function Checkout() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const handleSubmit = () => {
        console.log('Place order for', formData);
    };

    const handleChange = (e: FormEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

    return (
        <form className="flex flex-col max-w-md" action={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
                id="firstName"
                className="border mb-4"
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
            />

            <label htmlFor="lastName">Last name</label>
            <input
                id="lastName"
                className="border mb-4"
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                className="border mb-4"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
            />

            <label htmlFor="phone">Phone</label>
            <input
                id="phone"
                className="border mb-4"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
            />
            <input
                className="px-4 py-2 w-max bg-amber-500 rounded-xl
                            hover:brightness-90 active:brightness-75"
                type="submit"
                value="Place Your Order"
            />
        </form>
    );
}
