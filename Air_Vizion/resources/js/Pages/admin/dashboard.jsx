import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function Dashboard({ data }) {
    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            try {
                await axios.delete(`/admin/users/${id}`);
                router.reload();
                alert("User deleted successfully!");
                // Reload the page to refresh the table
            } catch (error) {
                router.reload();
                console.error("Error deleting user:", error);
                alert("User deleted successfully!");
            }
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <br />
                                        <br />
                                        <th>Name</th>
                                        <br />
                                        <br />
                                        <th>Email</th>
                                        <br />
                                        <br />
                                        <th>Action</th>
                                        <br />
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <br />
                                            <br />
                                            <td>{user.name}</td>
                                            <br />
                                            <br />
                                            <td>{user.email}</td>
                                            <br />
                                            <br />
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(user.id)
                                                    }
                                                    className="px-4 py-2 text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
