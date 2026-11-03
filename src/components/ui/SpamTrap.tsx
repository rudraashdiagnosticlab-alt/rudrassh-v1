// A form field people never see (hidden on screen and from screen readers) that form-filling bots fill in.
// lib/enquiry.ts drops any submit that has it filled.
export function SpamTrap() {
  return (
    <div className="sr-only" aria-hidden>
      <label>
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
