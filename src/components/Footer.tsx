import VaultLogo from './VaultLogo';

export default function Footer() {
  return (
    <footer className="border-t border-vault-border bg-vault-dark/80 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <VaultLogo className="h-6 w-auto" />
          <span className="text-sm text-vault-muted">Partner Research</span>
        </div>
        <p className="text-xs text-vault-muted">
          Confidential. Prepared for internal strategic planning.
        </p>
      </div>
    </footer>
  );
}
