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
          <div className="flex items-center justify-between space-x-2">
            <Label
              htmlFor="email-notifications"
              className="flex flex-col space-y-1"
            >
              <span>Notifications par email</span>
              <span className="text-sm font-normal text-muted-foreground">
                Recevez des mises à jour sur vos réservations
              </span>
            </Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between space-x-2">
            <Label
              htmlFor="sms-notifications"
              className="flex flex-col space-y-1"
            >
              <span>Notifications SMS</span>
              <span className="text-sm font-normal text-muted-foreground">
                Recevez des rappels par SMS
              </span>
            </Label>
            <Switch id="sms-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sécurité</CardTitle>
          <CardDescription>Gérez vos paramètres de sécurité</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div>
              <Label>Authentification à deux facteurs</Label>
              <p className="text-sm text-muted-foreground">
                Ajoutez une couche de sécurité supplémentaire à votre compte
              </p>
            </div>
            <Button variant="outline">Configurer 2FA</Button>
          </div>
          <Separator />
          <div className="grid gap-4">
            <div>
              <Label>Modifier le mot de passe</Label>
              <p className="text-sm text-muted-foreground">
                Changez régulièrement votre mot de passe pour plus de sécurité
              </p>
            </div>
            <Button variant="outline">Changer le mot de passe</Button>
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
          <div className="grid gap-4">
            <div>
              <Label>Supprimer le compte</Label>
              <p className="text-sm text-muted-foreground">
                Cette action est irréversible et supprimera toutes vos données
              </p>
            </div>
            <Button variant="destructive">Supprimer mon compte</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
