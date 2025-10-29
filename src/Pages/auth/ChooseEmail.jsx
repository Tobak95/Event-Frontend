import React from "react";
import { useState } from "react";
import { axiosInstance } from "../../Utils/axiosInstance";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../../Hooks/useAppContext";

const ChooseEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAppContext();
  const token = searchParams.get("token");
  const emailsParam = searchParams.get("emails");
  let parsedEmails = [];

  try {
    parsedEmails = emailsParam
      ? JSON.parse(decodeURIComponent(emailsParam))
      : [];
  } catch (err) {
    parsedEmails = [];
  }

  const [selectedEmail, setSelectedEmail] = useState(parsedEmails[0] || "");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!selectedEmail) {
      setError("Please choose an email");
      return;
    }
    setLoading(true);
    try {
      const res = await axiosInstance.post("/api/auth/finalize-google", {
        token,
        chosenEmail: selectedEmail,
      });
      const { token: authToken, refreshToken, user } = res.data;
      if (!authToken || !user) throw new Error("Invalid response");
      localStorage.setItem("token", authToken);
      localStorage.setItem("refreshToken", refreshToken || "");
      localStorage.setItem("user", JSON.stringify(user));
      login(authToken, user);
      const role = String(user.role || "").toLowerCase();
      if (role === "admin" || role === "superadmin") {
        navigate("/dashboard/admin", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || err.message || "Error finalizing"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ padding: 24 }}>
        <h3>Choose an email to continue</h3>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {parsedEmails.length === 0 && <p>No emails found in the URL.</p>}
          {parsedEmails.map((e) => (
            <label
              key={e}
              style={{ display: "flex", gap: 8, alignItems: "center" }}
            >
              <input
                type="radio"
                name="email"
                value={e}
                checked={selectedEmail === e}
                onChange={() => setSelectedEmail(e)}
              />
              <span>{e}</span>
            </label>
          ))}
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          onClick={handleContinue}
          disabled={loading}
          style={{ marginTop: 16 }}
        >
          {loading ? "Continuing..." : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default ChooseEmail;
