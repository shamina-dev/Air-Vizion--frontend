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
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
                                                ID
                                            </th>
                                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
                                                Name
                                            </th>
                                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
                                                Email
                                            </th>
                                            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((user, index) => (
                                            <tr
                                                key={user.id}
                                                className={`${
                                                    index % 2 === 0
                                                        ? "bg-white"
                                                        : "bg-gray-50"
                                                } hover:bg-gray-100`}
                                            >
                                                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                                                    {user.id}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                                                    {user.name}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                                                    {user.email}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                user.id
                                                            )
                                                        }
                                                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
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
            </div>
        </AuthenticatedLayout>
    );
}
