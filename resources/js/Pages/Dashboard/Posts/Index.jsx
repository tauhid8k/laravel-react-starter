import { DataTable } from "@/Components/Table";
import { Link } from "@inertiajs/react";
import { columns } from "./columns";

const PostsPage = ({ posts }) => {
    // Search API (No debounce added for now)
    const handleSearch = (e) => {};

    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-medium">Posts</h2>

                <Link href={route("posts.create")} className="btn btn-primary">
                    Add Post
                </Link>
            </div>

            <div className="flex flex-col gap-4">
                <input
                    onChange={handleSearch}
                    type="search"
                    name="search"
                    placeholder="Search name..."
                    className="input-contrast md:max-w-96"
                />
                <DataTable columns={columns} data={posts} />
            </div>
        </>
    );
};

export default PostsPage;
