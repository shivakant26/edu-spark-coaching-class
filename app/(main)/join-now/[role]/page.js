"use client";
import { useRouter , useParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function JoinRolePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { role } = useParams();
  const router = useRouter();
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const onSubmit = (data) => {
    router.push("/dashboard");
    // alert(JSON.stringify(data));
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Join as {capitalize(role)}</h2>
        <p style={styles.subtitle}>
          Enter your credentials to Login as a {role}.
        </p>
        <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div style={styles.form_field}>
            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p style={styles.form_error}>required</p>
            )}
          </div>
          <div style={styles.form_field}>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              {...register("password", {
                required: true,
              })}
            />
            {errors?.password?.type === "required" && (
              <p style={styles.form_error}>required</p>
            )}
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #f0f4ff, #e1ecff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    animation: "fadeIn 0.6s ease-in-out",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#2d2d2d",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#0070f3",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  form_field: {
    position: "relative",
  },
  form_error: {
    position: "absolute",
    top: "42px",
    fontSize: "14px",
    color: "red",
  },
};
