import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import "./../../../css/login.css"

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="login-container">
                <div className="login-header">
                    <h1>Air Vizion</h1>
                    <p>Welcome back! Please log in to your account.</p>
                </div>

                {status && (
                    <div className="status-message">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="login-form">
                    <div className="form-group">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="form-input"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} className="error-message" />
                    </div>

                    <div className="form-group">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="form-input"
                            autoComplete="current-password"
                            onChange={(e) => setData("password", e.target.value)}
                        />
                        <InputError message={errors.password} className="error-message" />
                    </div>

                    <div className="form-group remember-me">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData("remember", e.target.checked)}
                            />
                            <span className="remember-text">Remember me</span>
                        </label>
                    </div>
                    {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="forgot-password"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    <div className="form-actions">
                        
                        
                        <PrimaryButton className="login-button" disabled={processing}> Log in
                        </PrimaryButton>
                        <PrimaryButton
                            href="/"
                            className="back-button"
                        >
                            Back
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}