import * as dedent from 'dedent';

/**
 * Provide a basic template for the entity component generation.
 * @param entityName
 */
export function getEntityTemplate(entityName: string): string {
    const resolutionKey = entityName.charAt(0).toLowerCase() + entityName.slice(1, -1);
	return dedent`
        import { Column, Entity } from "typeorm"; 
        import { Entity as MedusaEntity } from "medusa-extender";
        
        @MedusaEntity({ resolutionKey: "${resolutionKey}" })
        @Entity()
        export class ${entityName.replace('Entity', '')} {
            @Column()
            name: string;
        }
    `;
}
