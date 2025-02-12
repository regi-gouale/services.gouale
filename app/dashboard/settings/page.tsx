import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Gérez vos préférences de notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            className="flex items-center justify-between space-x-2"
            role="group"
            aria-labelledby="email-notifications-label"
          >
            <Label
              htmlFor="email-notifications"
              className="flex flex-col space-y-1"
              id="email-notifications-label"
            >
              <span>Notifications par email</span>
              <span className="text-sm font-normal text-muted-foreground">
                Recevez des mises à jour sur vos réservations
              </span>
            </Label>
            <Switch
              id="email-notifications"
              defaultChecked
              aria-describedby="email-notifications-description"
            />
          </div>
          <Separator role="separator" />
          <div
            className="flex items-center justify-between space-x-2"
            role="group"
            aria-labelledby="sms-notifications-label"
          >
            <Label
              htmlFor="sms-notifications"
              className="flex flex-col space-y-1"
              id="sms-notifications-label"
            >
              <span>Notifications SMS</span>
              <span className="text-sm font-normal text-muted-foreground">
                Recevez des rappels par SMS
              </span>
            </Label>
            <Switch
              id="sms-notifications"
              aria-describedby="sms-notifications-description"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sécurité</CardTitle>
          <CardDescription>Gérez vos paramètres de sécurité</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            className="grid gap-4"
            role="group"
            aria-labelledby="2fa-section"
          >
            <div>
              <Label id="2fa-section">Authentification à deux facteurs</Label>
              <p className="text-sm text-muted-foreground" id="2fa-description">
                Ajoutez une couche de sécurité supplémentaire à votre compte
              </p>
            </div>
            <Button variant="outline" aria-describedby="2fa-description">
              Configurer 2FA
            </Button>
          </div>
          <Separator role="separator" />
          <div
            className="grid gap-4"
            role="group"
            aria-labelledby="password-section"
          >
            <div>
              <Label id="password-section">Modifier le mot de passe</Label>
              <p
                className="text-sm text-muted-foreground"
                id="password-description"
              >
                Changez régulièrement votre mot de passe pour plus de sécurité
              </p>
            </div>
            <Button variant="outline" aria-describedby="password-description">
              Changer le mot de passe
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Zone de danger</CardTitle>
          <CardDescription>
            Actions irréversibles sur votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="grid gap-4"
            role="group"
            aria-labelledby="delete-account-section"
          >
            <div>
              <Label id="delete-account-section">Supprimer le compte</Label>
              <p
                className="text-sm text-muted-foreground"
                id="delete-description"
              >
                Cette action est irréversible et supprimera toutes vos données
              </p>
            </div>
            <Button
              variant="destructive"
              aria-describedby="delete-description"
              aria-label="Supprimer définitivement mon compte"
            >
              Supprimer mon compte
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
