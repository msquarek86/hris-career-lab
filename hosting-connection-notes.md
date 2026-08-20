# Hosting Connection Notes

## Cloudflare GitHub App review

On 20 August 2026, GitHub’s Installed GitHub Apps settings showed that **Cloudflare Workers and Pages** was installed with access restricted to **one selected repository**: `msquarek86/HRIS-learning-course`.

The app’s listed permissions were read access to metadata and read/write access to administration, checks, code, deployments, and pull requests for the selected repository. GitHub’s configuration page states that **Uninstall “Cloudflare Workers and Pages”** removes the app and revokes access to all resources. The requested next action is therefore an uninstall, not merely a suspension.

## Revocation confirmation

GitHub’s Installed GitHub Apps list was checked again after the user completed the removal. The **Cloudflare Workers and Pages** application no longer appeared. The remaining listed integration was **Manus Connector**. This confirms that the Cloudflare GitHub App no longer has repository access through this account.
