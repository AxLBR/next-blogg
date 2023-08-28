import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://clmeapyorwwjlwpwtzeb.supabase.co/rest/v1/',
    headers: {
        apikey: atob("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW1Oc2JXVmhjSGx2Y25kM2FteDNjSGQwZW1WaUlpd2ljbTlzWlNJNkluTmxjblpwWTJWZmNtOXNaU0lzSW1saGRDSTZNVFk1TWpNNE5EYzNOQ3dpWlhod0lqb3lNREEzT1RZd056YzBmUS5ndHQ3SU94MnBrQnpYOElTSDd0bW10Ym9hQzdUOVltRnBxVzNTTXBnTmxR"),
        authorization: atob("QmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSnpkWEJoWW1GelpTSXNJbkpsWmlJNkltTnNiV1ZoY0hsdmNuZDNhbXgzY0hkMGVtVmlJaXdpY205c1pTSTZJbk5sY25acFkyVmZjbTlzWlNJc0ltbGhkQ0k2TVRZNU1qTTRORGMzTkN3aVpYaHdJam95TURBM09UWXdOemMwZlEuZ3R0N0lPeDJwa0J6WDhJU0g3dG1tdGJvYUM3VDlZbUZwcVczU01wZ05sUQ==")
    }
})