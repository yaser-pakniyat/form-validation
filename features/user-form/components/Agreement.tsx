import Link from "next/link";

export default function Agreement() {
  return (
    <div>
      <div>
        <label htmlFor="agree">
          I agree <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>
        </label>
        <input id="agree" type="checkbox" />
      </div>
    </div>
  );
}
