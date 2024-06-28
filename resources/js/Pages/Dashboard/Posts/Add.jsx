import { Head, Link, useForm } from "@inertiajs/react";
import { toast } from "sonner";

const AddPostPage = () => {
    const { setData, processing, errors, post } = useForm({
        title: "",
        body: "",
        slug: "",
        status: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("posts.store"), {
            onSuccess: () => toast.success("Post added"),
        });
    };

    return (
        <>
            <Head title="Add Post" />
            <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-medium">Add Post</h2>
                <Link href={route("posts.index")} className="btn btn-muted">
                    Go back
                </Link>
            </div>

            <form onSubmit={handleSubmit} autoComplete="off">
                <fieldset
                    className="disabled:opacity-70"
                    disabled={processing}
                >
                    <div className="input-container">
                        <label htmlFor="title" className="input-label">
                            Title
                        </label>
                        <input
                            onChange={(e) => setData("title", e.target.value)}
                            type="text"
                            id="title"
                            name="title"
                            className="input-contrast"
                        />
                        {errors.title && (
                            <p className="input-error">{errors.title}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="slug" className="input-label">
                            Slug
                        </label>
                        <input
                            onChange={(e) => setData("slug", e.target.value)}
                            type="text"
                            id="slug"
                            name="slug"
                            className="input-contrast"
                        />
                        {errors.slug && (
                            <p className="input-error">{errors.slug}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="body" className="input-label">
                            Body
                        </label>
                        <textarea onChange={e => setData('body',e.target.value)} rows={7} className="input-contrast"></textarea>
                        {errors.body && (
                            <p className="input-error">{errors.body}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="status" className="input-label">
                            Status
                        </label>
                        <select
                            onChange={(e) => setData("status", e.target.value)}
                            id="status"
                            name="status"
                            className="input-contrast capitalize"
                        >
                            <option value="">Select status</option>
                            <option value="draft">Draft</option>
                            <option value="published">Publish</option>
                        </select>
                        {errors.status && (
                            <p className="input-error">{errors.status}</p>
                        )}
                    </div>
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="btn btn-primary ms-auto"
                        >
                            Add Post
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default AddPostPage;
