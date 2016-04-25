import {Injectable} from 'angular2/core'
import {LinuxVersion} from "./linuxVersion";

@Injectable()
export class LinuxVersionService{

    private linuxVersions = [
        { name: "Ubuntu", number: "1604"},
        { name: "Linux Mint", number: "17.3"},
        { name: "ElementaryOS", number: "0.3.2"},
        { name: "Fedora", number: "23"}
    ]

    getCurrentLinuxVersions() : Array<LinuxVersion>{
        //this would probably call a webservice
        return this.linuxVersions;
    }

    addLinuxVersion(name: string, version: string) : void {
        this.linuxVersions.push({
            name: name,
            number: version
        });
    }
}
