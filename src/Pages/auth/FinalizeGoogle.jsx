import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../Utils/axiosInstance";
import { useState, useEffect } from "react";
import { useAppContext } from "../../Hooks/useAppContext";

const FinalizeGoogle = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAppContext();

  useEffect(() => {
    const token = searchParams.get("token");
    const chosenEmail = searchParams.get("chosenEmail");
    if (!token) {
      setError("Missing token in URL");
      return;
    }

    const finalize = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.post(
          "http://localhost:5000/api/auth/finalize-google",
          {
            token,
            chosenEmail,
          }
        );
        const { token: authToken, refreshToken, user } = res.data;
        if (!authToken || !user) {
          throw new Error("Invalid response from server");
        }

        localStorage.setItem("token", authToken);
        localStorage.setItem("refreshToken", refreshToken || "");
        localStorage.setItem("user", JSON.stringify(user));

        const role = String(user.role || "").toLowerCase();
        if (role === "admin" || role === "superAdmin") {
          navigate("/dashboard/admin", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Google finalize error:", error.response?.data || error);
        setError(
          error?.response?.data?.message ||
            error.message ||
            "Failed to finalize"
        );
      } finally {
        setLoading(false);
      }
    };

    if (token) finalize();
  }, [token, chosenEmail, navigate]);
  return (
    <div>
      <h3>{loading ? "Finalizing Google sign-in..." : "Finalizing..."}</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FinalizeGoogle;
